import styled from 'styled-components'

interface StyledTitleProps {
  isFinished?: boolean
}

const CardTitle = styled.div<StyledTitleProps>`
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled' : 'text']};
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1.5rem;
`

export default CardTitle
