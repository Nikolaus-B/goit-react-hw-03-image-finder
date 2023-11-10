import Modal from 'react-modal';
import { LargeImage } from './ModalImage.styled';
import { useSpring, animated } from '@react-spring/web';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },

  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    border: 'none',
    background: 'transparent',
  },
};

Modal.setAppElement('#root');

export const ModalImage = ({ modalIsOpen, closeModal, largeImg, topic }) => {
  const fadeIn = useSpring({
    opacity: modalIsOpen ? 1 : 0,
    from: { opacity: 1 },
  });

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Gallery Modal"
    >
      <animated.div style={fadeIn}>
        <LargeImage src={largeImg} alt={topic} />
      </animated.div>
    </Modal>
  );
};
