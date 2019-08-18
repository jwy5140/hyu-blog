import React, { Fragment, useState } from 'react'
import PropTypes from "prop-types";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import { Select } from "antd"
import Comics from '../components/XKCD/xkcd'
import Cyclone from '../components/Cyclone/cyclone'
import 'antd/dist/antd.css';
import { graphql } from "gatsby";
import Seo from "../components/Seo";

import InfoBox from '../components/Info/infobox'

const Experiments = (props) => {

    const {
        data: {
          site: {
            siteMetadata: { facebook }
          }
        }
      } = props;

    const [select, setSelect] = useState('');
    const { Option } = Select;

    const displayExperiment = () => {
        switch (select){
            case 'Infinite XKCD':
                return <Comics />
            case 'Cyclone':
                return <Cyclone />
            default:
                return null
        }
    }

    return (
        <Fragment>
            <ThemeContext.Consumer>
                {theme => (
                <Fragment>
                    <InfoBox selection={select}/>
                    <Article theme={theme}>
                        <header>
                            <Headline title='Killing time? Check these out.' theme={theme} />
                        </header>
                        <div id='experiment-dropdown'>
                            <Select defaultValue='' onChange={(e)=>{setSelect(e)}}>
                                <Option value='' disabled>Select an Experiment</Option>
                                <Option value='Infinite XKCD'>Infinite XKCD</Option>
                                <Option value='Cyclone'>Cyclone</Option>
                            </Select>
                        </div>
                        <div id='experiment-display'>
                            {displayExperiment()}
                        </div>

                        {/* --- STYLES --- */}
                        <style jsx>{`
                            header{
                                text-align: center;
                            }

                            #experiment-dropdown{
                                text-align: center;
                            }

                            #experiment-display{
                                width: 100%;
                            }
                        `}</style>
                    </Article>
                </Fragment>
                )}
            </ThemeContext.Consumer>
            <Seo facebook={facebook} />
        </Fragment>
)}

Experiments.propTypes = {
    data: PropTypes.object.isRequired
  };

export default Experiments


//eslint-disable-next-line no-undef
export const query = graphql`
  query ExperimentQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;

