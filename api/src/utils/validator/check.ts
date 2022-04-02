import ValidationError from '../../errors/validation.error';
import IValidateFields, { IValidateField } from './validator.interface';

export interface PartialCheck {
  (field: IValidateField, name: string): boolean | never;
}

export interface FullCheck {
  (field: IValidateFields): boolean | never;
}

const required: PartialCheck = (field: IValidateField, name: string) => {
  if (field?.required) {
    if (!field?.value) {
      throw Error('required');
    }
  }

  return false;
};

const onlyOne: FullCheck = (fields: IValidateFields) => {
  const keys = Object.keys(fields);
  const keysLength = keys.length;

  let oneExists = false;

  for (let i = 0; i < keysLength; i++) {
    if (fields[keys[i]]?.onlyOne) {
      if (!fields[keys[i]]?.value && !oneExists) {
        oneExists = true;
      } else {
        throw Error('two exists');
      }
    }
  }

  return false;
};

const atLeastOne: FullCheck = (fields: IValidateFields) => {
  const keys = Object.keys(fields);
  const keysLength = keys.length;

  let atLeastOneExists = false;

  for (let i = 0; i < keysLength; i++) {
    if (fields[keys[i]]?.onlyOne) {
      if (!fields[keys[i]]?.value && !atLeastOneExists) {
        atLeastOneExists = true;
      }
    }
  }

  if (!atLeastOneExists) {
    throw Error('required at least one parameter');
  }

  return false;
};

const type: PartialCheck = (field: IValidateField) => {
  if (field?.type) {
    if (typeof field.value !== field.type) {
      throw Error('bad type');
    }
  }

  return false;
};

const pattern: PartialCheck = (field: IValidateField) => {
  if (field?.pattern) {
    if (!RegExp(field.pattern).test(field.value)) {
      throw Error('bad type');
    }
  }

  return false;
};

const valueSize: PartialCheck = (field: IValidateField, name: string) => {
  if (field?.minValue) {
    if (field.value < field.minValue) {
      throw Error('bad value size');
    }
  }

  if (field?.maxValue) {
    if (field.value > field.maxValue) {
      throw Error('bad value size');
    }
  }

  return false;
};

const length: PartialCheck = (field: IValidateField) => {
  if (field?.minLength) {
    if (field.value.length < field.minLength) {
      throw Error('bad length');
    }
  }

  if (field?.maxLength) {
    if (field.value.length > field.maxLength) {
      throw Error('bad length');
    }
  }

  return false;
};

export default {
  partialChecks: [
    required,
    type,
    pattern,
    valueSize,
    length,
  ],
  fullChecks: [
    onlyOne,
    atLeastOne,
  ],
};
