import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Python',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <p>
        Conheça a linguagem de programação Pyton<br></br>
        Conheças as Bibliotecas desta linguagem direcionadas para:<br></br>
        Análise de Dados e<br></br>
        Inteligência Artificial.
      </p>
    ),
  },
  {
    title: 'Análise de Dados',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Conheça conceitos sobre análies de dados.<br></br>
        Escreva scripts de análise de dados.
      </>
    ),
  },
  {
    title: 'Inteligência Artificial',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Conheça conceitos sobre Inteligência Artificial.<br></br>
        Escreva scripts de Inteligência Artificial.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
