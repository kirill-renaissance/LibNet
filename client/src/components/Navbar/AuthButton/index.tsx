import React from 'react';

import styles from './AuthButton.module.scss';
import { ConnectButton } from '@rainbow-me/rainbowkit';
// import useUser from '../../../../hooks/useUser';
import { useRouter } from 'next/router';
import { useDisconnect } from 'wagmi';
import Link from 'next/link';

// import { toast } from 'react-toastify';

export const AuthButton = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const menuRef = React.useRef<any>();
  const popupState = React.useRef(isPopupOpen);
  //   const { user, handleLogout } = useUser();

  const router = useRouter();
  const { disconnect } = useDisconnect();

  const handleCopy = () => {
    // navigator.clipboard.writeText(user.wallet);
    // toast.success('Address copied', {
    //   position: 'bottom-right',
    //   autoClose: 1500,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: 'dark',
    // });
  };

  React.useEffect(() => {
    popupState.current = isPopupOpen;
  }, [isPopupOpen]);

  const openPopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!menuRef.current.contains(e.target)) {
        setIsPopupOpen(false);
      }
    };
    const keyPressHandler = (event: KeyboardEvent) => {
      if (event.code === 'Escape' && popupState.current === true) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('keydown', keyPressHandler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('keydown', keyPressHandler);
    };
  }, []);

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        return (
          <div
            ref={menuRef}
            className={styles.wrapper}
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}>
            {(() => {
              if (!connected) {
                return (
                  <button className={styles.connectButton} onClick={openConnectModal} type="button">
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button className={styles.accountButton} onClick={openPopup} type="button">
                    <>
                      <section className={styles.details}>
                        <p className={styles.walletAddress}>{account.displayName}</p>
                      </section>
                    </>

                    {isPopupOpen && (
                      <section className={styles.popup}>
                        <p className={styles.item}>
                          <Link href="/profile">profile</Link>
                        </p>
                        <button
                          onClick={() => {
                            disconnect();
                            // handleLogout();
                          }}
                          className={styles.redItem}>
                          <p>Log out</p>
                        </button>
                      </section>
                    )}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
export default AuthButton;
