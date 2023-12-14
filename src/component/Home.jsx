import '../App.css';
import rabbani from '../rabbani.png';
import port from '../portfolio-1-img.jpg';
import port1 from '../portfolio-2-img.jpg';
import port3 from '../portfolio-3-img.jpg';
import burhan from '../burhan.jpeg';
import burhan2 from '../burhan2.jpeg';


const Home = () => {
    return (
        <>
            <div className=" bg-dark  text-light" style={{ height: "70vh" }}>
                <div className="container h-100 ">
                    <div className="row">
                        <div className="col-lg-4 sm-lg">
                            <p className="text-success home1 pt-5">---Introducing</p>
                            <h1 className=" home1" style={{ fontSize: "70px" }}>Hello <br /> <strong>I'm Burhan</strong> <br /><strong> Rabbani</strong></h1>
                            <p className=' home1'>
                                
                            </p>
                            <button className="btn cls_btn home2 btn-warning btn-medium">Contact Me</button>
                        </div>
                        <div className="col-lg-8 home3 cls_img">
                            <img src={rabbani} className='my_img  home3' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='' style={{ backgroundColor: "#2d2e32", height: "430vh" }}>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 sm-lg home4">
                            <div className="card bg-dark p-5 text-light text-center mt-5" style={{ width: "18rem", borderRadius: "25px"  }}>
                                <div className="card-body " >
                                    <span><i className="bi bi-brightness-high fs-1 "></i> </span>
                                    <h5 className="card-title pt-3">Product Design</h5>
                                    <p className="card-text">The technological revolution is changing aspect.</p>
                                </div>
                            </div>

                            <div className="card bg-dark p-5 text-light text-center mt-5" style={{ width: "18rem", borderRadius: "25px" }}>
                                <div className="card-body " >
                                    <span><i className="bi bi-stack fs-1"></i> </span>
                                    <h5 className="card-title pt-3">UI Design</h5>
                                    <p className="card-text">The technological revolution is changing aspect.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 home4 sm-lg mt-5">
                            <div className="card bg-dark p-5 text-light text-center mt-5" style={{ width: "18rem", borderRadius: "25px" }}>
                                <div className="card-body " >
                                    <span><i className="bi bi-trophy fs-1 "></i> </span>
                                    <h5 className="card-title pt-3">ICON Design</h5>
                                    <p className="card-text">The technological revolution is changing aspect.</p>
                                </div>
                            </div>

                            <div className="card bg-dark  p-5 text-light text-center mt-5" style={{ width: "18rem", borderRadius: "25px" }}>
                                <div className="card-body " >
                                    <span><i className="bi bi-stack-overflow fs-1"></i> </span>
                                    <h5 className="card-title pt-3">LOGO Design</h5>
                                    <p className="card-text">The technological revolution is changing aspect.</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-5 ms-5 text-light pt-5    sm-lg ps-5" style={{ marginTop: "150px" }} >

                            <p className="text-success home5 pt-5">---My Skills</p>
                            <h1 className=" home7" >Why Hire Me For Next <br />  Project?</h1>
                            <p className='home7'>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.</p>
                            <button className="btn btn-warning home2 btn-medium">Contact Me</button>

                        </div>
                    </div>
                </div>


                <div className="container pt-5 mt-5">
                    <div className="row pt-5">

                        <div className="col-lg-6 home6 text-light pt-5 mt-5" >
                            <p className="text-success ">---Project 1</p>
                            <h1> Branding Nice Studio</h1>
                            <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can..</p>
                            <button className="btn   btn-outline-warning btn-medium">Contact Me</button>

                        </div>



                        <div className="col-lg-6 pt-5" >

                            <div className='cls_port1'>
                                <img src={port} className='cls_port' alt="" />
                            </div>

                        </div>


                    </div>
                </div>


                <div className="container">
                    <div className="row pt-5">



                        <div className="col-lg-6 pt-5" >

                            <div className='cls_port12'>
                                <img src={port1} className='cls_port11' alt="" />
                            </div>

                        </div>

                        <div className="col-lg-6 home6 text-light pt-5 mt-5 " >

                            <p className="text-success ">---Project 2</p>
                            <h1> Mobile Card App</h1>
                            <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can..</p>
                            <button className="btn   btn-outline-warning btn-medium">Contact Me</button>

                        </div>


                    </div>
                </div>


                <div className="container">
                    <div className="row pt-5">

                        <div className="col-lg-6 home6 text-light pt-5 mt-5" >
                            <p className="text-success ">---Project 3</p>
                            <h1>Restaurant Landing page</h1>
                            <p>The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can..</p>
                            <button className="btn   btn-outline-warning btn-medium">Contact Me</button>
                        </div>
                        <div className="col-lg-6 pt-5" >

                            <div className=' cls_port1'>
                                <img src={port3} className='cls_port' alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container home9  cls_col">
                    <div className="row">
                        <div className="col-lg-3 bg-dark cls_3 text-center pt-5 fs-1  ">
                            <h1 className='text-success  fs-1   pt-3'>56</h1>
                            <h5 className='text-center text-light ' >Happy Clients</h5>
                        </div>
                        <div className="col-lg-3 bg-dark text-center pt-5 ">
                            <h1 className='text-success fs-1 cls_0 pt-3'>87+</h1>
                            <h5 className='text-center text-light ' >Projects Done</h5>
                        </div>
                        <div className="col-lg-3 bg-dark text-center pt-5 ">
                            <h1 className='text-success fs-1 cls_0 pt-3'> 16+</h1>
                            <h5 className='text-center text-light ' >Awards Winning</h5>
                        </div>
                        <div className="col-lg-3 bg-dark cls_4 text-center pt-5 t">
                            <h1 className='text-success fs-1 cls_0 pt-3'>7+</h1>
                            <h5 className='text-center text-light ' >Years Experience</h5>
                        </div>
                    </div>
                </div>



                <div className="container home10 pt-5">
                    <div id="carouselExampleIndicators" className="carousel slide ">

                        <div className="carousel-indicators  text-warning">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active   text-warning" aria-current="true" aria-label="Slide 1">
                            </button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>

                        </div>

                        <div className="carousel-inner  ">
                            <div className="row">
                                <div className="col-lg-6">

                                    <div className="carousel-item active">
                                        <div className='cls_port1'>
                                            <img src={burhan} className="cls_port" alt="burhan_pic" />
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className='cls_port1'>
                                            <img src={burhan2} className="cls_port" alt="burhan_pic" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-5">
                                    <h1><i class="bi bi-quote text-success fs-1 ms-5"></i></h1>
                                    <h4 className='text-light ms-5'>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!

                                        Amman Payne
                                        CEO of Figma

                                    </h4>
                                </div>
                            </div>



                        </div>


                    </div>

                </div>

                <div className="container bg-dark cls_last text-light mt-5 rounded-5 pt-5 py-5 App">
                    <h1 className=''></h1>
                    <h1 >Lets Work Together</h1>
                    <p>The technological revolution is changing aspect of our lives, and the fabric of <br /> society itself. it's also changing the way we learn and what we learn</p>
                    <button className="btn btn-warning btn-medium">Contact Me</button>
                </div>

            </div >








        </>
    );
}

export default Home;