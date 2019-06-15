export class NewUser {
  numtel: number;
  motdepass: string;
  prenom: string;
  nom: string;
  descrip: string;
  image: string;

  constructor() {
    this.numtel = null;
    this.motdepass = null;
    this.prenom = null;
    this.nom = null;
    this.descrip = null;
  }

  isValidUser() {
    let isValid = false;
    if (this.nom && this.prenom && this.numtel && this.motdepass) {
      isValid = true;
    }
    return isValid;
  }
}