import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';

import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { Trans } from '@lingui/macro';

import { shuffleArray, targetBlank } from '../../helpers';
import { AuthorProps } from './getTeamData';
import { CustomFade } from '../utils';

import { getTeamData } from './getTeamData';

const TeamMember = ({
  name,
  role,
  description,
  profileImage,
  gif,
  twitter,
  linkedIn,
  article,
}: AuthorProps) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const emojiPath = gif.file.url;
  return (
    <CustomFade className="ledgista col-12 col-md-6 col-lg-4" delay={300}>
      <div className="pb-6 h-100 d-flex flex-column align-items-center justify-content-between">
        <div className="d-flex flex-column align-items-center">
          <Helmet>
            <link rel="preload" as="image" href={emojiPath} />
          </Helmet>
          <div
            className="ledgista-image-wrapper"
            onMouseOver={() => setShowEmoji(true)}
            onMouseOut={() => setShowEmoji(false)}
          >
            {showEmoji ? (
              <img src={emojiPath} />
            ) : (
              <Img {...profileImage} className="mx-auto" alt={name} />
            )}
          </div>
          <div className="text-center d-flex flex-column align-items-center">
            <div>
              <h4 className="mt-2 mb-0">{name}</h4>
              <small className="text-muted">{role}</small>
              <p className="mt-2 font-weight-light">{description}</p>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          {!!article && (
            <a className="social-icon mx-2" href={`/updates/${article}/`}>
              <FontAwesomeIcon icon={faComments} />
            </a>
          )}
          <a className="social-icon mx-2" href={linkedIn} {...targetBlank}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          {!!twitter && (
            <a className={`social-icon mx-2`} href={twitter || ''} {...targetBlank}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          )}
        </div>
      </div>
    </CustomFade>
  );
};

export const TeamMembers = () => {
  const teamData = Object.entries(getTeamData());
  const teamStillAtLedgy = teamData.filter((member) => !member[1].alumni);
  const [team, setTeam] = useState(teamStillAtLedgy);
  useEffect(() => {
    setTeam((prev) => shuffleArray(prev));
  }, []);

  return (
    <div className="container text-center my-4 mb-lg-6">
      <h2>
        <Trans>Meet the</Trans> {team.length} Ledgistas
      </h2>
      <div className="row justify-content-center my-5">
        {team.map(([key, member]) => (
          <TeamMember {...member} key={`team-${key}`} />
        ))}
      </div>
      <hr />
    </div>
  );
};
