/**
 * Модальное окно изменения адреса
 */

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../../../styles/modals/AddressModal.scss';
import CloseButton from '../../../ui/buttons/CloseButton';
import SearchButton from '../../../ui/buttons/SearchButton';
import SearchInputBlack from '../../../ui/inputs/search/SearchInputBlack';
import Select from '../../../ui/inputs/select/Select';

const AddressChange = ({ isAddressChangeActive, setIsAddressChangeActive }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    if (isAddressChangeActive) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = '';
    }
  });

  return (
    <>
      <div className={isAddressChangeActive
        ? 'address-right active'
        : 'address-right'}
           onClick={() => setIsAddressChangeActive(false)}>
        <div className='modal-right-content'
             onClick={(e) => e.stopPropagation()}>
          <div>
            <img src='/assets/img/checkout/map.png'
                 alt='' />
          </div>

          <div className='address-content'>
            <div className='modal-right-heading'>
              <p>Пункты самовывоза</p>
              <CloseButton onClick={() => setIsAddressChangeActive(false)} />
            </div>

            <div>
              <h2>Выберите службу выдачи</h2>
              <Select
                title={null}
                name={'service'}
                errors={errors}
                register={register}
                options={['СДЭК', 'DPD']}
              />
            </div>

            <div>
              <h2>Адреса пунктов</h2>
              <div className='search-container'>
                <SearchInputBlack placeholder={'Поиск по адресу'} />
                <SearchButton color={'white'}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
    ;
};

export default AddressChange;
