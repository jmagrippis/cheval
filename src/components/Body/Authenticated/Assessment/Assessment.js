/* @flow */

import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Skills from './Skills/Skills'
import type { IdealsState, SkillsState } from '../../../../types'

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1070px;
  width: 100%;
`

const Title = styled.h1`
  padding: 0.5em 0;
  font-size: 2em;
  line-height: 2em;
  text-align: center;
`

const Header = styled.h2`
  font-size: 1.5em;
  line-height: 1.5em;
  text-align: center;
  text-transform: capitalize;
`

type Props = {
  company: ?string,
  ideals: IdealsState,
  role: string,
  setIdealValue: Function,
  setSkillValue: Function,
  skills: SkillsState
};

class Assessment extends PureComponent {
  props: Props;

  render () {
    const {
      company,
      ideals,
      role,
      skills,
      setIdealValue,
      setSkillValue
    } = this.props
    return (
      <Container>
        <Title>Rate your skills!</Title>
        <section>
          <Header>Role: {role}</Header>
          <Skills
            setSkillValue={setSkillValue}
            skills={skills}
          />
        </section>
        {company && ideals.length
          ? (
            <section>
              <Header>{company} values</Header>
              <Skills
                setSkillValue={setIdealValue}
                skills={ideals}
              />
            </section>
            )
          : null}
      </Container>
    )
  }
}

export default Assessment
