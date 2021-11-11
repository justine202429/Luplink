export interface Field {
  id: string; // id used by API to recognize label
  desc: string; // the label displayed, human-readable
  type?: 'gain' | 'loss'; // Used to display appropriate warning (e.g. user types a positive loss)
  units: string[]; // A list of possible units, the first one being displayed by default
  options?: 'field' | 'antenna'; // Optional, since by default we'll assume it's a field
  optionsField?: Field[];
  default: number;
  alternative?: Form;
}

export interface Form {
  /// /componentType:string,
  componentId: string;
  parentComponent?: string;
  hasAntenna?: boolean;
  componentName?: string;
  image?: string;
  params: Field[];

  parent?: string;
  computeFn?: string;
}

export interface AntennaField {
  id: string;
  antennaId: string;

  antennaValues: Field[];
}

export interface Template {
  components: Form[];
}

export class EmptyForm implements Form {
  // componentType: '',
  componentId: string;
  parentComponent?: string;
  params: Field[];

  constructor() {
    this.componentId = 'empty';
    this.parentComponent = 'uplink';
    this.params = [];
  }
}
