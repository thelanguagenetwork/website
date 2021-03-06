import React from 'react';
import './dict.css';
import axios from 'axios'

import { useState, useEffect, Fragment } from 'react';
import { Typography, Box, Divider } from '@material-ui/core'


export default function Dict() {


    const [word, setWord] = useState("");
    const [definitions, setDefinitions] = useState([])
    // const [exist, setExist] = useState(true)
    // const [audio, setAudio] = useState(null)

    const fetchDefinition = async () => {

        const resp = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        console.log(resp)
        console.log(word)

        updateState(resp.data)
        // } catch (err) {
        //     setExist(false)
        // }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const trimmedWord = word.trim().toLowerCase();
        fetchDefinition()

        if (!trimmedWord || trimmedWord.split(' ').length > 1) return;
    }

    const updateState = data => {
        setDefinitions(data)
        // const phonetics = data[0].phonetics
        // if (!phonetics.length) return;
        // const url = phonetics[0].audio.replace('//ssl', 'https://ssl');
        // setAudio(new Audio(url));
    }

    useEffect(() => {

    }, [])

    // if (!exist) return<>
    //     <Typography>Word not found</Typography>
    //     <Button variant="contained" sx={{ textTransform: 'capitalize', mt: 2 }}>Go back</Button>
    //     </>

    // if (!definitions.length) return <CircularProgress />

    return (
        <div><div class="main-container">
            {/* <nav class="flex">
                <ul class="flex my-auto mr-10">
                    <div class="w-36 ml-20 mr-48">
                        <img src="images/TLN_logo.png" alt="TLN_logo" />
                    </div>
                    <div class="flex my-auto ml-80 space-x-14">
                        <li><a href="#">Pricing & Curriculum</a></li>
                        <li><a href="#">Courses</a></li>
                    </div>
                    <div class="flex my-auto mx-16">
                        <div>
                            <a href="#" class="py-2 px-4 rounded-lg text-white"
                                style={{ backgroundColor: '#13BFAB', border: "#13BFAB 1px solid" }}>Book a Trial Class</a>
                        </div>
                        <div class="ml-6">
                            <a href="#" class="py-2 px-4 rounded-lg" style={{ border: "1px solid #000000" }}>Login</a>
                        </div>
                    </div>
                </ul>
            </nav> */}

            <section className="pb-10 justify-center" style={{ height: "auto", backgroundColor: "#9850F4" }}>
                <div className="text-2xl lg:text-5xl pt-16 text-white flex flex-col justify-center align-center items-center">
                    <span className="items-center">English - English Dictionary</span>
                </div>
                <div class="lg:flex pt-12 mx-20 justify-center">
                    <div style={{ backgroundColor: "#8037DD", borderRadius: "15px" }} class="my-2 px-1 py-2 items-center">
                        <div class="flex items-center justify-center">
                            <img src="images/English.png " alt="English" class="mx-2 flex items-center" />
                            <span class="my-auto text-white text-xl lg:text-3xl px-4">English</span>
                        </div>
                    </div>
                    <div class="flex my-auto mx-4 justify-center items-center">
                        <img src="images/Arrow.png" alt="" />
                    </div>
                    <div style={{ backgroundColor: "#8037DD", borderRadius: "15px" }} class="my-2 px-1 py-2">
                        <div class="flex justify-center items-center">
                            <img src="images/English.png" alt="French" class="mx-2" />
                            <span class="my-auto text-white text-xl lg:text-3xl px-4">English</span>
                        </div>
                    </div>
                </div>



                <form className="mt-14 w-auto mx-10 lg:mx-52" onSubmit={handleSubmit}>
                    <div class="flex w-full mb-10">
                        <input name="field_name" class="rounded-r px-4 py-2 w-11/12" type="text" placeholder="Write something here..." onChange={event => setWord(event.target.value)} />
                        <span class="text-white flex items-center justify-center border-none">
                        <span onClick = {handleSubmit} class="flex items-center justify-center text-white" id="basic-addon2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </span>
                        </span>
                    </div>
                </form>
                

                <div className="mx-10 lg:mx-32">


                    {/* {definitions.map((def, idx) =>
                        <Fragment key={idx}>

                            {def.meanings.map(meaning =>
                                <>
                                    <Typography sx={{ textTransform: 'capitalize' }} color="GrayText" variant="subtitle1"><h1 className='font-bold uppercase'>{meaning.partOfSpeech}</h1></Typography>
                                    {meaning.definitions.map((definition, idx) => <Typography sx={{ my: 1 }} variant="body2" color="GrayText" key={definition.definition}>{meaning.definitions.length > 1 && `${idx + 1}. `} {definition.definition}</Typography>)}
                                </>
                            )}
                        </Fragment>
                    )} */}


                    {/* {definitions.map((def, idx) =><div class="accordion accordion-flush" id="accordionFlushExample">
                                <Fragment key={idx}>

                                    {def.meanings.map(meaning =>
                                        <>
                                            <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-md bg-white border border-gray-200 mb-10 lg:mx-20">
                                          
                                                <h2 class="accordion-header mb-0" id="flush-headingOne">
                                                    <button class="rounded-md accordion-button collapsed relative items-center flex flex-row w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target={`#${meaning.partOfSpeech}`}
                                                        aria-expanded="false" aria-controls="flush-collapseOne">
                                                        {meaning.partOfSpeech}
                                                    </button>
                                                </h2>
                                                {meaning.definitions.map((definition, idx) => 
                                                <div id={meaning.partOfSpeech} class="accordion-collapse border-0 collapse"
                                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body py-4 px-5">{meaning.definitions.length > 1 && `${idx + 1}. `} {definition.definition}</div>
                                                </div>)}
                                     
                                            </div>
                                        </>
                                    )}
                                </Fragment></div>
                            )} */}





                </div>


            </section>
            {definitions.map((def, idx) => <div class="accordion accordion-flush pt-10 px-20 lg:px-30" id="accordionFlushExample">
                <Fragment key={idx}>

                    {def.meanings.map(meaning =>
                        <>
                            <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-md bg-white border border-gray-200 mb-10 lg:mx-20">

                                <h2 class="accordion-header mb-0" id="flush-headingOne">
                                    <button class="rounded-md accordion-button collapsed relative items-center flex flex-row w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target={`#${meaning.partOfSpeech}`}
                                        aria-expanded="false" aria-controls="flush-collapseOne">
                                        {meaning.partOfSpeech}
                                    </button>
                                </h2>
                                {meaning.definitions.map((definition, idx) =>
                                    <div id={meaning.partOfSpeech} class="accordion-collapse border-0 collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body py-4 px-5">{meaning.definitions.length > 1 && `${idx + 1}. `} {definition.definition}</div>
                                    </div>)}

                            </div>
                        </>
                    )}
                </Fragment></div>
            )}
            {/* 
            <section class="mx-36 my-9 space-y-9">
                <div class="alpha-text space-x-7">
                    <button class="alpha py-2 w-16">A</button>
                    <button class="alpha py-2 w-16">B</button>
                    <button class="alpha py-2 w-16">C</button>
                    <button class="alpha py-2 w-16">D</button>
                    <button class="alpha py-2 w-16">E</button>
                    <button class="alpha py-2 w-16">F</button>
                    <button class="alpha py-2 w-16">G</button>
                    <button class="alpha py-2 w-16">H</button>
                    <button class="alpha py-2 w-16">I</button>
                    <button class="alpha py-2 w-16">J</button>
                    <button class="alpha py-2 w-16">K</button>
                    <button class="alpha py-2 w-16">L</button>
                    <button class="alpha py-2 w-16">M</button>
                </div>
                <div class="space-x-7">
                    <button class="alpha py-2 w-16">N</button>
                    <button class="alpha py-2 w-16">O</button>
                    <button class="alpha py-2 w-16">P</button>
                    <button class="alpha py-2 w-16">Q</button>
                    <button class="alpha py-2 w-16">R</button>
                    <button class="alpha py-2 w-16">S</button>
                    <button class="alpha py-2 w-16">T</button>
                    <button class="alpha py-2 w-16">U</button>
                    <button class="alpha py-2 w-16">V</button>
                    <button class="alpha py-2 w-16">W</button>
                    <button class="alpha py-2 w-16">X</button>
                    <button class="alpha py-2 w-16">Y</button>
                    <button class="alpha py-2 w-16">Z</button>
                </div>
            </section> */}

            {/* <hr class="dash mx-32 w-60" /> */}

            {/* <section class="mx-36 my-9 text-lg leading-loose main-mean">
                <div class="mean w-80">
                    <p> <span>A</span> ... <span>a sweet both</span> </p>
                    <p> <span>a tall order</span> ... <span>ably</span> </p>
                    <p> <span>abnormal</span> ... <span>absolve</span> </p>
                    <p> <span>absorb</span> ... <span>accessory</span> </p>
                    <p> <span>accident</span> ... <span>achievable</span> </p>
                    <p> <span>achieve</span> ... <span>active</span> </p>
                </div>
                <div class="mean w-80">
                    <p> <span>aerodynamic</span> ... <span>Afro-</span> </p>
                    <p> <span>after</span> ... <span>agonized</span> </p>
                    <p> <span>agonizing</span> ... <span>airily</span> </p>
                    <p> <span>airiness</span> .. <span>algebraic</span> </p>
                    <p> <span>alias</span> ... <span>allergic</span> </p>
                    <p> <span>allergy</span> ... <span>alternating</span> </p>
                </div>
                <div class="mean w-80">
                    <p> <span>anachronistic</span> ... <span>angle</span> </p>
                    <p> <span>angler</span> ... <span>anorak</span> </p>
                    <p> <span>anorexia</span> ... <span>antiquity</span> </p>
                    <p> <span>antiseptic</span> ... <span>appal</span> </p>
                    <p> <span>appalled</span> ... <span>apprehensiveness</span> </p>
                    <p> <span>apprentice</span> ... <span>archaeology</span> </p>
                </div>
            </section> */}

            {/* <section class="mx-36" id="show-mean">
                <div class="mt-12"><span style={{ color: "#6B6B6B" }}>English-French `{'>'}` A `{'>'}` Alias</span></div>

                <div class="mt-12">
                    <span class="text-4xl">Alias</span>
                    <p class="mt-2">ali-as | \ 'a-le-es, 'al-yes \</p>
                    <hr class="mean-dash w-52" />
                </div>

                <div class="flex space-x-14 text-xl" id="button-container">
                    <button id="newLD" class="myButton">DEFINITION</button>
                    <button id="newVC" class="myButton">SYNONYMS</button>
                    <button id="newFD" class="myButton">ANTONYMS</button>
                    <button id="newEX" class="myButton">EXAMPLE SENTENCES</button>
                </div>

                <div class=" leading-loose mb-10" id="createLD" style={{ display: "none" }}>
                    <hr class="mean-dash-sub w-28" />
                    <div>
                        <p class="text-lg font-bold mb-1">Definition of alias (Adverb)</p>
                        <p>: otherwise called : otherwise known as -used to indicate an additional name that a person</p>
                        <p>(such as a criminal) sometimes uses</p>
                    </div>
                    <div class="mt-8">
                        <p class="text-lg font-bold mb-1">Definition of alias (Noun)</p>
                        <p>: an assumed or additional name that a person (such as a criminal) sometimes uses</p>
                    </div>

                </div>

                <div class=" leading-loose mb-10" id="createVC" style={{ display: "none" }}>
                    <hr class="mean-dash-sub w-28" />
                    <p class="text-lg font-bold mb-1">Synonyms: Noun</p>
                    <p>byname, cognomen, epithet, handle, moniker (also monicker), nickname, sobriquet</p>
                    <p>(also soubriquet), surname</p>

                    <section class="flex space-x-28 my-12">
                        <div class="card px-9 pt-7 pb-4">
                            <p class="heading" style={{ color: "#6B6B6B" }}>WORD OF THE DAY</p>
                            <div class="leading-9">
                                <p class="text-3xl mt-4" style={{ color: "#701ED8" }}>au revoir</p>
                                <p style={{ color: "#6B6B6B" }}>/,ea re'vwa:,French o Revwar/</p>
                                <p>goodbye until we meet again.</p>
                                <p>"here's hoping it is au revoir and not goodbye"</p>

                                <div class="flex">
                                    <p style={{ color: "#701ED8" }}>Read more</p>
                                    <div>
                                        <img src="images/arrow-right.png" alt="arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card px-9 pt-7 pb-4">
                            <p class="heading" style={{ color: "#6B6B6B" }}>SEE RELATED WORDS</p>
                            <div class="flex leading-9 text-xl mt-4 space-x-16">
                                <div>
                                    <p>adieu</p>
                                    <p>adios</p>
                                    <p>arrivederci</p>
                                    <p>so long</p>
                                </div>
                                <div>
                                    <p>bye</p>
                                    <p>cheerio</p>
                                    <p>good day</p>
                                    <p>sayonara</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                <div class=" leading-loose mb-10" id="createFD" style={{ display: "none" }}>
                    <hr class="mean-dash-sub w-28" />
                    <p class="text-lg font-bold">Antonyms</p>
                </div>

                <div class=" leading-loose  mb-10" id="createEX" style={{ display: "none" }}>
                    <hr class="mean-dash-sub w-28" />
                    <p class="text-lg font-bold mb-1">Example Sentenses</p>
                </div>

            </section> */}

            {/* <section class="mx-36 my-16">
                <div class="my-10">
                    <p class="text-2xl font-semibold mb-1 tracking-wide">About English-French Dictionary</p>
                    <p class="leading-relaxed tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum adipisci harum excepturi sint earum voluptate nesciunt modi qui magni nulla dolores cum
                        consequuntur eaque, fuga quae ea numquam esse minima. Quasi veritatis nulla.</p>
                </div>
                <div class="my-10">
                    <p class="text-2xl font-semibold mb-1 tracking-wide">About English Language</p>
                    <p class="leading-relaxed tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum adipisci harum excepturi sint earum voluptate nesciunt modi qui magni nulla dolores cum
                        consequuntur eaque, fuga quae ea numquam esse minima. Quasi veritatis nulla, magnam quas ab in dolor
                        suscipit laborum harum, voluptate eveniet incidunt dicta culpa voluptas, omnis libero quae!</p>
                </div>
                <div class="my-10">
                    <p class="text-2xl font-semibold mb-1 tracking-wide">About French Language</p>
                    <p class="leading-relaxed tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorum adipisci harum excepturi sint earum voluptate nesciunt modi qui magni nulla dolores cum
                        consequuntur eaque, fuga quae ea numquam esse minima. Quasi veritatis nulla, magnam quas ab in dolor
                        suscipit laborum harum, voluptate eveniet incidunt dicta culpa voluptas, omnis libero quae!</p>
                </div>
                <div>
                    <img src="images/Banner.png" class=" mx-24 border rounded-xl" alt="Banner" />
                </div>
            </section> */}

        </div></div>
    )
}