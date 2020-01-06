import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { AppState } from "./contexts";
import contextState from "../../state/state";

export class Footer extends React.Component {
  static contextType = AppState;
  render() {
    let meta = contextState.meta || {};
    return (
      <footer className="contact">
        {meta.github ? (
          <a target="_blank" href={meta.github}>
            <span className="mail-data">
              <FontAwesomeIcon icon={faGithub} />
              <span className="data">View on github</span>
            </span>
          </a>
        ) : null}
        <a href={`mailto:${meta.email}`}>
          <span className="mail-data">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="data">{meta.email}</span>
          </span>
        </a>
        &nbsp; &nbsp; &nbsp;
        <a href={`tel:${meta.tlf}`}>
          <span className="mail-data">
            <FontAwesomeIcon icon={faPhone} />
            <span className="data">{meta.tlf}</span>
          </span>
        </a>
        {/*<i class="material-icons">phone</i>
                             <span className="twitter-data"><FaTwitter /><span className="data">@acwrks</span></span>
                             <span className="instagram-data"><FaInstagram /><span className="data">acwrks</span></span>
                             */}
      </footer>
    );
  }
}
