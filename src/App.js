import Button from './components/Button'
import GlobalStyles from './components/GlobalStyles'
function App() {
  return (
    <div style={{padding: '10px 32px'}}>
      <GlobalStyles>
        <Button primary/>
        <Button />
      </GlobalStyles>
    </div>
  )
}
export default App