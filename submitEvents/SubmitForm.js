import React, {useState} from 'react';

const SubmitForm = ({onLogin}) => {

   const [form, setForm] = useState({
      email: "", pass: ""
   });

   function handleChange(e) {
      // console.log(e.target)
      const {name, value} = e.target
      setForm((state) => ({
             ...state,
             [name] : value
          }
      ))
   }
   function handleSubmit(e) {
      e.preventDefault()
      // onLogin(form)
      console.log(form)
      // setForm({
      //    email: '',
      //    pass: '',
      // });
   }


   return (
       <form onSubmit={handleSubmit}>
          <div className="form-group">
             <label htmlFor="email">Email address</label>
             <input type="email" value={form.email} name='email'
                    onChange={handleChange}
                    className="form-control" id="email" placeholder="Enter email"/>
          </div>
          <div className="form-group">
             <label htmlFor="pass">Password</label>
             <input type="password"  value={form.pass} name='pass'
                    onChange={handleChange}
                    className="form-control" id="pass" placeholder="Password"/>
          </div>
          <button className="btn btn-primary">Submit</button>
       </form>
   );
};

export default SubmitForm;