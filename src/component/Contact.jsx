import '../App.css';

const Contact = () => {
    return (<div style={{ height: "100vh", backgroundColor: "#2d2e32", paddingTop: "120px" }}>
        <div className="container">
            <div className="row">

                <div className="col-lg-6 text-light">
                    <p className="text-success ">---Contact Me</p>
                    <h1> Get In Touch With Me</h1>
                    <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert Factual knowledge is less prized when everything you ever need to know can be found at doing everything.</p>
                    <button className="btn btn-warning btn-medium">Contact Me</button>
                    <div className="container">
                        <div className="row pt-5">

                            <div className='col-lg-6 cls_2'>

                               <div className='cls_span1 cls_span'> <i class="bi bi-telephone text-success  fs-1 "></i></div> 
                               <div className='cls_span2'>
                               <span > <strong>Phone</strong> </span> <br />
                                    <span >+923068866333</span> <br />
                                    <span >+923143886885</span>
                               </div>
                                

                            </div>

                            <div className="col-lg-6">
                                
                               <div className='cls_span1 cls_span'> <i class="bi bi-envelope text-success  fs-1 "></i></div> 
                               <div className='cls_span2'>
                               <span > <strong>Email</strong> </span> <br />
                                    <span >bubur320@gmail.com</span> <br />
                                    <span >burha@gmail.com</span>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-lg-6 pt-5" style={{}}>
                    <div className="row ">
                        <div className="col ">
                            <input type="text" id='input' className="form-control bg-dark cls_b text-light " placeholder="Full Name" />
                        </div>
                        <div className="col">
                            <input type="email" id='input' className="form-control cls_b bg-dark" placeholder="Email" aria-label="Last name" />
                        </div>
                        <div className="mb-3 pt-3">
                            <textarea type="text" id='input' className="form-control cls_b bg-dark" rows="10" placeholder="Message *" />
                        </div>

                    </div>
                    <button className="btn btn-warning btn-medium">Send To Me</button>
                </div>


            </div>
        </div>
    </div>);
}

export default Contact;