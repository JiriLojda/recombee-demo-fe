import { GetStaticProps, NextPage } from 'next';
import { AppPage } from '../components/shared/ui/appPage';
import { getHomepage } from "../lib/kontentClient";
import { WebSpotlightRoot } from '../models/content-types/web_spotlight_root';

type Props = Readonly<{
  homepage: WebSpotlightRoot;
}>;

const Home: NextPage<Props> = props => (
  <AppPage itemId={props.homepage.system.id}>
    <div className="grow">
      Some content will be rendered here.
    </div>
  </AppPage>
);

export const getStaticProps: GetStaticProps<Props> = async context => {
  const homepage = await getHomepage(!!context.preview);

  if (!homepage) {
    throw new Error("Can't find homepage item.");
  }

  return {
    props: { homepage },
  };
}

export default Home
