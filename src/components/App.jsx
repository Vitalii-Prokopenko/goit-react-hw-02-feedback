import { Feedback } from 'components/feedback/Feedback';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        React homework template
        <Feedback />
      </div>
      
    </>
  );
};
