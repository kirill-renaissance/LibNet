import React from 'react';
import MainButton from '../MainButton';
import BecomeHostModal from '../Modals/BecomeHostModal';

const NewProfile = () => {
  const [isHostModal, setIsHostModal] = React.useState(false);
  return (
    <>
      <BecomeHostModal isOpen={isHostModal} setModal={setIsHostModal} />

      <div className="container">
        <h2 style={{ marginTop: 20 }}>Text</h2>
        <p style={{ marginTop: 10 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum mollitia molestiae at
          doloremque ut.
        </p>
        <MainButton style={{ marginTop: 70, marginBottom: 20 }} title="Share your book" />
        <MainButton style={{ marginBottom: 20 }} title="Rent a book" />
        <MainButton
          onClick={() => setIsHostModal(true)}
          style={{ marginBottom: 20 }}
          title="Become host"
        />
      </div>
    </>
  );
};

export default NewProfile;
