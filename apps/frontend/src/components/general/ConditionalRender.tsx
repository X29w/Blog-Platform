import { ReactNode, type FC } from "react";

interface ConditionalRenderProps {
  /** 控制渲染的条件 */
  condition: boolean;

  /** 需要渲染的子组件——条件为真时渲染 */
  children: ReactNode;

  /** 条件为false时渲染的组件 */
  fallback?: ReactNode;
}

const ConditionalRender: FC<ConditionalRenderProps> = ({
  condition = true,
  children,
  fallback,
}) => (condition ? children : fallback);

export default ConditionalRender;
