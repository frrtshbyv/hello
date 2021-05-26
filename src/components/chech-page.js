import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import winLogo from '../3.png'
import CheckForm from '../components/check-form'

function CheckPage(props) {

  const [value, setValue] = useState('')
  const [visible, setVisible] = useState(false)

  const showWin = () => {
    setVisible(true)
  }

  const winners = [
    {
      name: "MUKHAYYO SOBIROVA",
      date: "October 25, 2018",
      adress: "DAHBET SHAHARCHASI ULUGBEK STREET 28 OQDARYO DISTRICT ",
      country: "SAMARKAND REGION UZBEKISTAN",
      index: Math.random(),
      status: "winner",
      code: "abc789ABC"
    },
    {
      index: Math.random(),
      status: "lose",
      code: "12332166"
    }
  ]
  function send(e) {
    e.preventDefault()
    
  }

  const winnerCheck = winners.map(function(item, index) {
    if (item.code === value && item.status === "winner") {
      return (
        <div key={index}>
          <div className="container">
            <div className="winner__row">
                <div className="winner__header">
                    <div className="winner__info">
                    <img className="winner__logo" src={winLogo} />
                    <h3 className="winner__name">{item.name}</h3>
                    <h3 className="winner__adress">{item.adress}</h3>
                    <h3 className="winner__country">{item.country}</h3>
                    </div>
                    <div className="winner__header--text">
                    <em className="adress__title">
                        United States Department of State
                    </em>
                    <em className="adress__subtitle">
                        Kentucky Consular Center 
                    </em>
                    <em className="adress__subtitle">
                    North Highway Williamsburg
                    </em>
                    <em className="adress__subtitle">
                        KY40769 U.S.A
                    </em>
                </div>
                </div>
                <div className="winner__content">
                  <span>Dear DV Applicant,</span>
                  <p>
                  This is the official notice for you to pursue your application for a DV-2019 visa. An appointment has been scheduled for you at the U.S. Embassy or Consulate stated below. You and all members of your family who wish to apply for a Diversity Visa must appear at the appointed date and time for your interview. Please notify the office listed if you cannot keep the appointment.
                  </p>
                  <p>
                  You and any eligible family members will be required to submit sufficient proof of identity upon arrival. If you fail to obtain a DV-2019 visa by September 30, 2019, your registration will expire. Your family members must also obtain their visas prior to September 30, 2019, or they will not be permitted to join you in the United States under the DV-2019 program.
                  </p>
                  <p>
                  Please follow all of the instructions provided at http://www.dvselectee.state.gov (http://www.dvselectee.state.gov) to prepare for your interview. It is very important that you follow the instructions carefully and completely. The Diversity Lottery Fee for each applicant and each member of the family must be paid in full at the Consulate or Embassy at the time of your interview. There is only one fee and you should only make a payment at the Embassy or Consulate when instructed to do so at the time of your interview. The fee is non-refundabie, even if the visa is refused for any reason.
                  </p>
                </div>
                <div className="winner__content--footer">
                  <span>Interview Appointment TASHKENT</span>
                  <h3 className="interview__adress">U.S.Embassy, Tashkent Consular Section 3 Moykurgan Street Yunus Abad Block 5 TASHKENT</h3>
                  <date>December 27,2018 08:00 AM</date>
                  <p>The Kentucky Consular Center has completed the processing of your case and forwarded it to the interviewing office. Further inquiries should be addressed to the interviewing office. When communicating with the Embassy/Consufate, always refer to your name and case number exactly as they appear below. Contact information for the consular section in TASHKENT can be found on usembassy.gov</p>
                </div>
            </div>
          </div>
        </div>
      )
    }
    if(item.code === value && item.status === "lose") {
        return(
            <div key={index}>
                <h3>you lose</h3>
            </div>
        )
    }
  })
    return(
        <div className="check__main">
          <div className="container">
          <h3 className="check__title">Enter Entrant Information</h3>
            <div className="form" onSubmit={send}>
              
                    {visible === false ? <CheckForm value={value} setValue={(e) => setValue(e.target.value)} /> : null}
                
                    {visible === true ? winnerCheck : null}
                    {visible === false ? <button className="form__button btn btn-primary" type="submit" value="Отправить" onClick={showWin}>Check</button> : null}
                
                <Link to="/">
                <button className="form__button btn btn-primary" type="submit" value="Отправить">
                    Cancel
                </button>
                </Link>
              
          <div>
          
            
          </div>
          </div>
          </div>
        </div>
      
    )
}

export default CheckPage;