import React from 'react'

const cross = "/images/cross-mark@20.png"
const tick = "/images/check-mark@20.png"
function TableData() {
    const tdata = [
        {   
            title: "Study Material",
            Introductory: tick,
            LevelA1: tick,
            LevelA2: tick,
            LevelB1: tick,
            LevelB2: tick,
            LevelA1A2: tick,
            LevelA1A2B1B2: tick
        },{   
            title: "Progress Report",
            Introductory: tick,
            LevelA1: tick,
            LevelA2: tick,
            LevelB1: tick,
            LevelB2: tick,
            LevelA1A2: tick,
            LevelA1A2B1B2: tick
        },
        {   
            title: "Parent Info System",
            Introductory: tick,
            LevelA1: tick,
            LevelA2: tick,
            LevelB1: tick,
            LevelB2: tick,
            LevelA1A2: tick,
            LevelA1A2B1B2: tick
        },{   
            title: "Instant Review",
            Introductory: tick,
            LevelA1: tick,
            LevelA2: tick,
            LevelB1: tick,
            LevelB2: tick,
            LevelA1A2: tick,
            LevelA1A2B1B2: tick
        },
        // {   
        //     title: "E-learning material",
        //     Introductory: tick,
        //     LevelA1: tick,
        //     LevelA2: tick,
        //     LevelB1: tick,
        //     LevelB2: tick,
        //     LevelA1A2: tick,
        //     LevelA1A2B1B2: tick
        // },
        {   
            title: "Assessments & Quizzes",
            Introductory: tick,
            LevelA1: tick,
            LevelA2: tick,
            LevelB1: tick,
            LevelB2: tick,
            LevelA1A2: tick,
            LevelA1A2B1B2: tick
        },
        {   
            title: "Mentoring Sessions",
            Introductory: cross,
            LevelA1: tick,
            LevelA2: tick,
            LevelB1: tick,
            LevelB2: tick,
            LevelA1A2: tick,
            LevelA1A2B1B2: tick
        },
        {   
            title: "Exam Prep",
            Introductory: cross,
            LevelA1: tick,
            LevelA2: tick,
            LevelB1: tick,
            LevelB2: tick,
            LevelA1A2: tick,
            LevelA1A2B1B2: tick
        },{   
            title: "Counseling",
            Introductory: cross,
            LevelA1: tick,
            LevelA2: tick,
            LevelB1: tick,
            LevelB2: tick,
            LevelA1A2: tick,
            LevelA1A2B1B2: tick
        },{   
            title: "Certificate",
            Introductory: cross,
            LevelA1: tick,
            LevelA2: tick,
            LevelB1: tick,
            LevelB2: tick,
            LevelA1A2: tick,
            LevelA1A2B1B2: tick
        },
        // {   
        //     title: "Access content & upskilling opportunities",
        //     Introductory: cross,
        //     LevelA1: tick,
        //     LevelA2: tick,
        //     LevelB1: tick,
        //     LevelB2: tick,
        //     LevelA1A2: tick,
        //     LevelA1A2B1B2: tick
        // },
    ];
    return tdata;
}

export default function KidsTable() {
    const tableData = TableData();
    return (<>
        <div className="h-full font-medium text-4xl poppins text-center px-20 pt-20 pb-5">Why learning with TLN is beneficial?</div>
        <div className='py-10'>
            <table class='shadow-md rounded lg:w-5/6 w-full m-auto'>
                <tbody>
                    <tr class=' flex text-left text-sm flex-wrap sm:no-wrap unwanted'>
                        <th scope='col' class='w-[30%] p-2 bg-gray-100 border border-r-0  border-y-1 font-normal flex items-center border-b-0 table-cells'></th>
                        <td class='w-[18%] p-2 border border-r-0  border-gray-300 flex items-center justify-center font-bold text-teal-700 text-lg flex-wrap table-cells'>Introductory</td>
                        <td class='w-[16%] p-2 border border-r-0  border-gray-300 flex items-center justify-center text-center font-bold text-teal-700 text-lg flex-wrap table-cells'>Level A1</td>
                        <td class='w-[16%] p-2 border border-r-0  border-gray-300 flex items-center justify-center text-center font-bold text-teal-700 text-lg flex-wrap table-cells'>Level A2</td>
                        <td class='w-[20%] p-2 border border-r-0  border-gray-300 flex items-center justify-center text-center font-bold text-teal-700 text-lg flex-wrap table-cells'>Level A1+A2</td>
                    </tr>
                    {tableData.map((Tdata, i) => {
                        return(
                    <tr class=' flex text-left text-sm flex-wrap sm:no-wrap' key={i}>
                        <th scope='col' class='w-[30%] p-3 bg-gray-100 border-x-1 border-gray-300 font-normal flex items-center table-cells text-left text-base text-teal-600 table-head'>{Tdata.title}</th>

                        <td class='w-[18%] p-3 border border-r-0  border-gray-300 flex items-center justify-center text-center font-bold text-teal-700 text-lg flex-wrap table-cells cells-visb cells-hid hidden'>Introductory</td>
                        <td class='w-[18%] p-3 border-l-2 border-r-0 flex items-center justify-center flex-wrap table-cells'><img src={Tdata.Introductory} alt="img" /></td>

                        <td class='w-[16%] p-3 border border-r-0  border-gray-300 flex items-center justify-center text-center font-bold text-teal-700 text-lg flex-wrap table-cells cells-visb hidden'>Level A1</td>
                        <td class='w-[16%] p-3 border-l-2 border-r-0 flex items-center justify-center text-center  flex-wrap table-cells'><img src={Tdata.LevelA1} alt="img" /></td>

                        <td class='w-[16%] p-3 border border-r-0  border-gray-300 flex items-center justify-center text-center font-bold text-teal-700 text-lg flex-wrap table-cells cells-visb hidden'>Level A2</td>
                        <td class='w-[16%] p-3 border-l-2 border-r-0 flex items-center justify-center text-center flex-wrap table-cells'><img src={Tdata.LevelA2} alt="img" /></td>

                        <td class='w-[20%] p-3 border border-r-0  border-gray-300 flex items-center justify-center text-center font-bold text-teal-700 text-lg flex-wrap table-cells cells-visb hidden'>Level A1+A2</td>
                        <td class='w-[20%] p-3 border-l-2 border-r-0 flex items-center justify-center text-center flex-wrap table-cells'><img src={Tdata.LevelA1A2} alt="img" /></td>
                    </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}
