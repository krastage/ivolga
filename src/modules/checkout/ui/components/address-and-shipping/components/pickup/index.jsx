/**
 * Блок самовывоза
 */

import React, { useState } from 'react';
import PrimaryButton from '../../../../../../ud-ui/buttons/PrimaryButton';
import AnimatedPage from '../../../../../../utils/AnimatedPage';
import AddressChange from '../../../../../../ud-ui/modals/address-change';

const PickupShipping = () => {
  const [isAddressChangeActive, setIsAddressChangeActive] = useState(false);

  return (
    <>
      <AnimatedPage>
        <div className='pickup-shipping'>
          <div className='pickup-shipping__title'>
            <p>СДЭК</p>
            <p className='pickup-shipping__title-address'>
              Шоу-рум Fable, Дизайн-завод Флакон, Большая Новодмитровская ул.,
              36
            </p>
          </div>
          <PrimaryButton
            type={'button'}
            label={'Изменить адрес'}
            onClick={() => setIsAddressChangeActive(true)}
          />
        </div>
        <AddressChange setIsAddressChangeActive={setIsAddressChangeActive}
                       isAddressChangeActive={isAddressChangeActive} />
      </AnimatedPage>
    </>
  );
};

export default PickupShipping;
