import React from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import Image from 'next/image';
import { BorderedTable } from 'src/components/Table';
import avatarImage from 'public/couple.png';

const IntroSection = () => {
  return (
    <Section backgroundColor={COLORS.highlight1}>
      <WelcomeText />
      <FromInfo />
      <div style={{ position: 'relative' }}>
        <AvatarImage />
        <InfoTable />
      </div>
    </Section>
  );
};

const AvatarImage = () => {
  return (
    <div
      style={{
        maxWidth: '230px',
        position: 'absolute',
        width: '100%',
        bottom: '-12rem',
        right: 0,
      }}
    >
      <Image
  src="/photos/couple.png"
  alt=""
  width={230}
  height={230}
  style={{ transform: 'scaleX(-1)' }}
/>
    </div>
  );
};

const WelcomeText = () => {
  return (
    <div>
  <p>
    Their story began in high school, where they met as friends long before
    either of them imagined what the future would hold.
    <br />
    <br />
    At first, the connection was lighthearted and playful. She wasn’t exactly
    easy on him in the beginning, but he was persistent in the way that mattered,
    patient, steady, and genuine.
    <br />
    <br />
    Over time, friendship turned into something deeper, and they found
    themselves choosing each other without forcing anything.
    <br />
    <br />
    Growing up side by side, they learned, changed, and supported one another
    through every stage of life.
    <br />
    <br />
    What started in high school grew into a love built on years of trust,
    laughter, and shared memories, a true high school sweetheart story that has
    only grown stronger with time.
  </p>
</div>

  );
};

const FromInfo = () => {
  return (
    <div>
      장채환, 서순옥 의 장남 기효
      <br />
      진경철, 김은숙 의 장녀 유림
    </div>
  );
};

const InfoTable = () => {
  return (
    <BorderedTable style={{ margin: '3rem 0 9rem', position: 'relative' }}>
      <tbody>
  <tr>
    <td>When</td>
    <td>
      Saturday, June 17, 2028
      <br />
      12:00 PM (doors open at 11:00 AM)
    </td>
  </tr>
  <tr>
    <td>Where</td>
    <td>
      George Peabody Library
      <br />
      17 E. Mount Vernon Place, Baltimore, MD 21202
      <br />
      Historic Mount Vernon neighborhood, across from the Washington Monument
    </td>
  </tr>
</tbody>

    </BorderedTable>
  );
};

export default IntroSection;
