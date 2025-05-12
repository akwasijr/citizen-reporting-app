import * as Yup from 'yup';

export const reportSchema = Yup.object().shape({
  incidentType: Yup.string().required('Incident type is required'),
  description: Yup.string().min(10, 'Description too short'),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
  location: Yup.string().when('useCurrentLocation', {
    is: false,
    then: Yup.string().required('Location is required')
  }),
  email: Yup.string().email('Invalid email').when('isAnonymous', {
    is: false,
    then: Yup.string().required('Email is required unless anonymous')
  }),
  phone: Yup.string().nullable(),
});
