import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ProfileLayout from '../../../../../../../ui/layouts/ProfileLayout';
import PrimaryButton from '../../../../../../../ui/buttons/PrimaryButton';
import Select from '../../../../../../../ui/inputs/select/Select';
import MultiInput from '../../../../../../../ui/inputs/text/MultiInput';
import TextAreaInput from '../../../../../../../ui/inputs/text/TextAreaInput';
import SuccessMessage from '../../../../../../../ui/messages/SuccessMessage';
import AnimatedPage from '../../../../../../../utils/AnimatedPage';

const AddAddress = () => {
  const [showMessage, setShowMessage] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    setShowMessage(true);
    reset();
    console.log(data);
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const content = (
    <AnimatedPage>
      {showMessage && <SuccessMessage />}
      <div className='right-container'>
        <div className='address-add-container'>
          <Link to={'/profile/addresses'} className='back-button'>
            <img src='/assets/img/icons/arrow-left.svg' alt='' />
            <p>Назад</p>
          </Link>

          <form className='form form--gap' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='common-profile-title'>Новый адрес</h1>

            <MultiInput
              title={'Название'}
              placeholder={'Офис на Остоженке'}
              name={'title'}
              errors={errors}
              register={register}
            />

            <Select
              title={'Город'}
              name={'city'}
              errors={errors}
              register={register}
              options={['Москва', 'Санкт-Петербург', 'Казань']}
            />

            <MultiInput
              title={'Адрес'}
              placeholder={'Улица Большая Никитская, 2, кв. 21'}
              name={'address'}
              errors={errors}
              register={register}
            />

            <TextAreaInput
              title={'Комментарий для курьера'}
              placeholder={'Позвоните за 2 часа, этаж 2, домофон 54667457'}
              name={'comment'}
              errors={errors}
              register={register}
            />

            <PrimaryButton type={'submit'} disabled={!isValid} label={'Сохранить'} />
          </form>
        </div>
      </div>
    </AnimatedPage>
  );

  return <ProfileLayout content={content} />;
};

export default AddAddress;
