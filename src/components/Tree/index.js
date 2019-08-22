import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import {
  Wrapper,
  Node,
  Legend,
  Text,
  VerticalArrow,
  Level,
  Child,
  HorizontalLine
} from './style';

class Tree extends Component {
  render() {
    const { data } = this.props;

    return (
      <Wrapper>
        <Level bottomTop>
          {data.effects &&
            data.effects.map((effect, effectIndex) => (
              <Child>
                <Level>
                  {effect._data &&
                    effect._data.map((subEffect, seIndex) => (
                      <Child>
                        <>
                          <Legend top />
                          <Node>
                            <Text>{subEffect.text}</Text>
                          </Node>
                        </>
                        <VerticalArrow top />
                        {effect._data.length > 1 && (
                          <HorizontalLine
                            rightHalf={seIndex === 0}
                            leftHalf={seIndex === effect._data.length - 1}
                          />
                        )}
                      </Child>
                    ))}
                </Level>

                {effect._data && effect._data.length > 0 && <VerticalArrow />}

                <>
                  <Legend top />
                  <Node>
                    <Icon name="ellipsis vertical" />
                    <Text>{effect.text}</Text>
                  </Node>
                </>

                {data.effects && data.effects.length > 1 && (
                  <>
                    <VerticalArrow top />
                    <HorizontalLine
                      rightHalf={effectIndex === 0}
                      leftHalf={effectIndex === data.effects.length - 1}
                    />
                  </>
                )}
              </Child>
            ))}
        </Level>

        {/* Center */}
        {data.effects && data.effects.length > 0 && <VerticalArrow top />}
        <>
          <Legend center />
          <Node>
            <Icon name="ellipsis vertical" />
            <Text>{data.problem.text}</Text>
          </Node>
        </>
        {/* Center */}

        {data.causes && data.causes.length > 0 && <VerticalArrow top />}

        <Level>
          {data.causes &&
            data.causes.map((cause, index) => (
              <Child>
                {data.causes && data.causes.length > 1 && (
                  <HorizontalLine
                    rightHalf={index === 0}
                    leftHalf={index === data.causes.length - 1}
                  />
                )}

                <VerticalArrow />
                <>
                  <Legend bottom />
                  <Node>
                    <Icon name="ellipsis vertical" />
                    <Text>{cause.text}</Text>
                  </Node>
                </>

                {cause._data && cause._data.length > 0 && <VerticalArrow top />}

                <Level>
                  {cause._data &&
                    cause._data.map((subCause, scIndex) => (
                      <Child>
                        {cause._data && cause._data.length > 1 && (
                          <HorizontalLine
                            rightHalf={scIndex === 0}
                            leftHalf={scIndex === cause._data.length - 1}
                          />
                        )}

                        <VerticalArrow />
                        <>
                          <Legend bottom />
                          <Node>
                            <Icon name="ellipsis vertical" />
                            <Text>{subCause.text}</Text>
                          </Node>
                        </>
                      </Child>
                    ))}
                </Level>
              </Child>
            ))}
        </Level>
      </Wrapper>
    );
  }
}

export default Tree;
