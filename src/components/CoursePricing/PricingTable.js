import React from 'react';
import './AdultCourses';

export default function PricingTable(props) {

    const icons = ['fa-adjust','fa-briefcase',"fa-book-open",'fa-graduation-cap',"fa-award","fa-award","fa-award","fa-award"];

    return (
        <div class="demo py-20 fadeIN">
            <div class="container">
                <div class="row flex flex-row flex-wrap justify-center">
                    {
                    props.TableData.map((data, i) => {
                        return (
                    <div class="col-md-3 col-sm-6">
                        <div class="pricingTable">
                            <div class="pricingTable-header">
                                <i class={`fa ${icons[i]}`}></i>
                                <div class="price-value flex flex-col"> ₹{data.DiscPrice} <span className='text-[1.4rem] line-through'>₹{data.OgPrice}</span> <span class="month">per month</span> </div>
                            </div>
                            <h3 class="heading">Level {data.lvlName}</h3>
                            <div class="pricing-content">
                                <ul>
                                    {
                                        data.content.map((cont, i) => {
                                            return (


                                                <li><b>{i + 1}.</b> {cont}</li>
                                            )

                                        })
                                    }

                                </ul>
                            </div>
                            <div class="pricingTable-signup">
                                <a href={data.Link}>Buy Now</a>
                            </div>
                        </div>
                    </div>


                    )
})}
                </div>
            </div>
        </div>
    )
}
