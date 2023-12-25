/**
 * Модальное окно изменения адреса
 */

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../../../../styles/AddressModal.scss';
import CloseButton from '../../buttons/CloseButton';
import PrimaryButton from '../../buttons/PrimaryButton';
import SearchButton from '../../buttons/SearchButton';
import SearchInput from '../../inputs/search/SearchInput';
import Select from '../../inputs/select/Select';

const AddressChange = ({ isAddressChangeActive, setIsAddressChangeActive }) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  function removeAllClassesExceptOne(element, classToKeep) {
    // Получаем список всех классов элемента
    const classes = element.classList;

    // Преобразуем список классов в массив для удобства обработки
    const classesArray = Array.from(classes);

    // Итерируем по массиву классов и удаляем все классы, кроме classToKeep
    classesArray.forEach((className) => {
      if (className !== classToKeep) {
        element.classList.remove(className);
      }
    });
  }

  const changeAddressModelView = (evt) => {
    const activeEl = document.querySelector('.address-content__controller.active');
    const viewType = evt.target.dataset.viewType;
    const container = document.querySelector('.address-right .modal-right-content');
    activeEl.classList.remove('active');
    evt.target.classList.add('active');

    removeAllClassesExceptOne(container, 'modal-right-content');

    container.classList.add(viewType);
  };

  useEffect(() => {
    document.body.style.overflow = isAddressChangeActive ? 'hidden' : '';
  });

  return (
    <>
      <div
        className={isAddressChangeActive ? 'address-right active' : 'address-right'}
        onClick={() => setIsAddressChangeActive(false)}>
        <div className='modal-right-content map' onClick={(e) => e.stopPropagation()}>
          <div className='address-right__map'>
            <img src='/assets/img/checkout/map.png' alt='' />
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

            <div className='address-content__controllers'>
              <button
                onClick={changeAddressModelView}
                data-view-type='map'
                className='address-content__controller active'>
                На карте
              </button>
              <button
                onClick={changeAddressModelView}
                data-view-type='list'
                className='address-content__controller'>
                Списком
              </button>
            </div>

            <div>
              <h2>Адреса пунктов</h2>
              <div className='search-container'>
                <SearchInput placeholder={'Поиск по адресу'} />
                <SearchButton color={'white'} />
              </div>
            </div>
            <div className='address-right__map-mobile'>
              <img src='/assets/img/checkout/map.png' alt='' />
            </div>
            <div className='address-content__list'>
              <div className='pickup-shipping'>
                <div className='pickup-shipping__title'>
                  <p>СДЭК</p>
                  <p className='pickup-shipping__title-address-button'>
                    Шоу-рум Fable, Дизайн-завод Флакон, Большая Новодмитровская ул., 36
                  </p>
                </div>
                <PrimaryButton type={'button'} label={'Привезти сюда'} />
              </div>

              <div className='pickup-shipping'>
                <div className='pickup-shipping__title'>
                  <p>СДЭК</p>
                  <p className='pickup-shipping__title-address-button'>
                    Шоу-рум Fable, Дизайн-завод Флакон, Большая Новодмитровская ул., 36
                  </p>
                </div>
              </div>

              <div className='pickup-shipping'>
                <div className='pickup-shipping__title'>
                  <p>СДЭК</p>
                  <p className='pickup-shipping__title-address-button'>
                    Шоу-рум Fable, Дизайн-завод Флакон, Большая Новодмитровская ул., 36
                  </p>
                </div>
              </div>

              <div className='pickup-shipping'>
                <div className='pickup-shipping__title'>
                  <p>СДЭК</p>
                  <p className='pickup-shipping__title-address-button'>
                    Шоу-рум Fable, Дизайн-завод Флакон, Большая Новодмитровская ул., 36
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressChange;
