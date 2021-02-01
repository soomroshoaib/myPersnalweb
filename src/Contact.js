import React,{useState} from 'react'

function Contact() {
    const [data, setdata] = useState({
        fullname: "",
        email:"",
        phone:"",
        msg: ""
    });

    const  InputEvent=(event)=>{
        const {name, value} = event.target;

        setdata((preVal)=>{
            return{
                ...preVal,
                [name]: value,
            }
        })

    }



    const formSubmit = (e)=>{
        e.preventDefault();
        alert(
            `My Name is ${data.fullname}. My Email is ${data.email}. My Mobile Number is  ${data.phone}. My Messege is ${data.msg}`
        )

    }
    return (<>
        <div className="my-4">
          <h1 className="text-center">Contact US</h1>  
        </div>

        <div className="container contact_div">

           <div className="row">
             <div className="col-md-6 col-10 mx-auto">
               <form onSubmit={formSubmit}>

               <div class="mb-3">
               <label 
               for="exampleFormControlInput1" 
               class="form-label">
                FullName
               </label>
               <input
                type="Text" 
                class="form-control" 
                id="exampleFormControlInput1"
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                 placeholder="Enter your name " />
               </div>

               <div class="mb-3">
               <label 
               for="exampleFormControlInput1" 
               class="form-label">
                Email
               </label>
               <input
                type="text" 
                class="form-control" 
                id="exampleFormControlInput1"
                name="email"
                value={data.email}
                onChange={InputEvent}
                 placeholder="Enter your Email" />
               </div>

               <div class="mb-3">
               <label 
               for="exampleFormControlInput1" 
               class="form-label">
                Phone
               </label>
               <input
                type="phone" 
                class="form-control" 
                id="exampleFormControlInput1"
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                 placeholder="Enter your Mobile" />
               </div>

               
              <div class="mb-3">
             <label 
             for="exampleFormControlTextarea1"
              class="form-label">
                 Messege
              </label>
              <textarea 
              class="form-control" 
              id="exampleFormControlTextarea1" 
              name="msg"
                value={data.msg}
                onChange={InputEvent}
              rows="3"></textarea>
              </div>

              <div class="col-12">
               <button class="btn btn-outline-secondary" type="submit">Submit form</button>
                </div>
               </form>

             </div>

           </div>

        </div>
    </>)
}

export default Contact
