import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
function mission11() {
    return (
        <div className="bg-black w-full py-16  flex text-sm flex-col items-center">
            <p className="text-white text-center lg:text-left" style={{
            fontFamily: "OpenSauceOne",
            fontWeight: "normal",
            lineHeight: 1.6,
          }}>We have developed a deep understanding on<br/> how to further your relevance to the world and<br/> how to increase awareness </p>
          <div><FontAwesomeIcon icon={faRocket} className="w-10 text-white mt-10" /></div>  

            <p className="text-white mt-8 text-center lg:text-left"style={{
            fontFamily: "OpenSauceOne",
            fontWeight: "normal",
            lineHeight: 1.6,
          }}>WE ARE ON A MISSION</p>     
            <p className="text-white text-sm mt-4 text-center lg:text-left"style={{
            fontFamily: "OpenSauceOne",
            fontWeight: "normal",
            lineHeight: 1.6,
          }}>Our mission is  to create, commercialize, and<br/> capture strategic value sustainably as we take <br/>interest into humanitarian and philanthropic<br/> ventures to address global issues</p>
        </div>
    )
}

export default mission11
