declare module "react-google-recaptcha" {
  import { RefObject } from "react";

  interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (value: string | null) => void;
    ref?: RefObject<any>;
    theme?: "light" | "dark";
    size?: "compact" | "normal" | "invisible";
    tabindex?: number;
    onExpired?: () => void;
    onErrored?: () => void;
    badge?: "bottomright" | "bottomleft" | "inline";
  }

  export default class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {}
}
