import FooterComponent from "./components/footer/footer.component";
import NavbarComponent from "./components/navbar/navbar.component";
import { LoaderState } from "./context/loader/loader.context";
import CallToAction from "./components/calltoaction/calltoaction";

export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"min-h-screen w-screen "}>
      <LoaderState>
        <NavbarComponent />
        {children}
        <FooterComponent />
        <CallToAction />
      </LoaderState>
    </div>
  );
}
