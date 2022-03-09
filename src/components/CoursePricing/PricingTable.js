import React from 'react';
import './AdultCourses';

export default function PricingTable(props) {
    return <div class="demo py-20 fadeIN">
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-sm-6">
                <div class="pricingTable">
                    <div class="pricingTable-header">
                        <i class="fa fa-adjust"></i>
                        <div class="price-value flex flex-col"> ₹{props.A1price} <span className='text-[1.4rem] line-through'>₹{props.A1priceOG}</span> <span class="month">per month</span> </div>
                    </div>
                    <h3 class="heading">Batch A1</h3>
                    <div class="pricing-content">
                        <ul>
                            {
                                props.A1Content.map((cont,i) => {
                                    return(

                                        
                                        <li><b>{i+1}.</b> {cont}</li>
                                        )
                                        
                                })
                            }
                            
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="#">Buy Now</a>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6">
                <div class="pricingTable green">
                    <div class="pricingTable-header">
                        <i class="fa fa-briefcase"></i>
                        <div class="price-value flex flex-col"> ₹{props.A2price} <span className='text-[1.4rem] line-through'>₹{props.A2priceOG}</span> <span class="month">per month</span> </div>
                    </div>
                    <h3 class="heading">Batch A2</h3>
                    <div class="pricing-content">
                        <ul>
                        {
                                props.A2Content.map((cont,i) => {
                                    return(

                                        
                                        <li><b>{i+1}.</b> {cont}</li>
                                        )
                                        
                                })
                            }
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="#">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="pricingTable blue">
                    <div class="pricingTable-header">
                        <i class="fa fa-book"></i>
                        <div class="price-value flex flex-col"> ₹{props.B1price} <span className='text-[1.4rem] line-through'>₹{props.B1priceOG}</span> <span class="month">per month</span> </div>
                    </div>  
                    <h3 class="heading">Batch B1</h3>
                    <div class="pricing-content">
                        <ul>
                        {
                                props.B1Content.map((cont,i) => {
                                    return(

                                        
                                        <li><b>{i+1}.</b> {cont}</li>
                                        )
                                        
                                })
                            }
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="#">Buy Now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="pricingTable red">
                    <div class="pricingTable-header">
                        <i class="fa fa-cube"></i>
                        <div class="price-value flex flex-col"> ₹{props.B2price}<span className='text-[1.4rem] line-through'>₹{props.B2priceOG}</span> <span class="month">per month</span> </div>
                    </div>
                    <h3 class="heading">Batch B2</h3>
                    <div class="pricing-content">
                        <ul>
                        {
                                props.B2Content.map((cont,i) => {
                                    return(

                                        
                                        <li><b>{i+1}.</b> {cont}</li>
                                        )
                                        
                                })
                            }
                        </ul>
                    </div>
                    <div class="pricingTable-signup">
                        <a href="#">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>;
}
