interface Speciality {
  id: string;
  name: string;
  description: string;
  insuranceCode: string;
  _count: {
    doctors: number;
  };
}

export default Speciality;
