import QNTitleMaterial from "./QNTitle";
import QNInputMaterial from "./QNInput";
import QNRadioMaterial from "./QNRadio";
import QNCheckboxMaterial from "./QNCheckbox";

export type QNComponentType = "qnTitle" | "qnInput" | "qnRadio" | "qnCheckbox";

export interface IQNComponent {
  type: QNComponentType;
  component: React.FC<any>; // 画布中显示的组件
  [key: string]: any;
}

const qncMaterialList: IQNComponent[] = [
  QNTitleMaterial,
  QNInputMaterial,
  QNRadioMaterial,
  QNCheckboxMaterial,
];

export const getMaterialByType = (
  type: QNComponentType
): IQNComponent | undefined => {
  return qncMaterialList.find((item) => item.type === type);
};
