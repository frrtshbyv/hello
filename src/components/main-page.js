import * as React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <main className="main-section">
            <div className="container">
              <div className="main__row">
              <div className="main-section__first">
                <h3>Electronic Diversity Visa Lottery</h3>
                <span className="congrats">Thank you!</span>
                <p className="description">The DV-2022 Diversity Visa program registration period was between October 7, 2020 and November 10, 2020. All submission processing at this web site has finished.</p>
              </div>
              <div className="main-section__second">
                
                  <h3 className="second-title">DV Entrant Status Chek</h3>
                  <div className="second-text">
                  <div>
                  <h3>
                  2022 Entrant Status Check
                  </h3>
                  <p className="second-description">DV-2022 Entrants may enter their confirmation information through the link below starting at noon (EDT) on May 8, 2021. The DV-2022 registration period opens on October 7, 2020, and closes on November 10, 2020. DV-2022 Entrants should keep their confirmation number until at least September 30, 2022.</p>
                  </div>
                  <div>
                    <h3>
                    2021 Entrant Status Check
                    </h3>
                  <p className="second-description">DV-2021 Entrants have until September 30, 2021 to check the status of their entry through this website. The DV-2021 registration period was from October 2, 2019, until November 5, 2019.</p>
                  </div>
                  </div>
                  <div className="main-section--footer">
                <h3>
                  Click the link below to check DV-2021 and DV-2020 Entrant Status.
                </h3>
                <Link to="/check"><button className="button btn-primary">Check status</button></Link>
              </div>
              </div>
              <div className="main__text">
                <p>
                <b>PAPERWORK REDUCTION ACT:</b> Public reporting burden for this collection of information is estimated to average 30 minutes per response, including time required for searching existing data sources, gathering the necessary documentation, providing the information and/or documents required, and reviewing the final collection. You do not have to supply this information unless this collection displays a currently valid OMB control number. If you have comments on the accuracy of this burden estimate and/or recommendations for reducing it, please send them to: PRA_BurdenComments@state.gov.
                </p>
                <p>
                <b>CONFIDENTIALITY STATEMENT:</b> The information asked for on this form is requested pursuant to Section 222 of the Immigration and Nationality Act. INA Section 222(f) provides that visa issuance and refusal records shall be considered confidential and shall be used only for the formulation, amendment, administration, or enforcement of the immigration, nationality, and other laws of the United States. Certified copies of visa records may be made available to a court which certifies that the information contained in such records is needed in a case pending before the court.
                </p>
                <p>
                <b>PRIVACY POLICY:</b> For information on the Department of State’s privacy policy, regarding the nature, purpose, use, and sharing of any Personally Identifiable Information (PII) collected via this website please click here.
                </p>
              </div>
            </div>
              
            </div>
          </main>
  )
}

export default HomePage;

