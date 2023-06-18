class Res {
  message: string;
  data: any;
  constructor({ message, data }: Res) {
    this.message = message;
    this.data = data;
  }
}

export default Res;
