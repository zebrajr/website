import { Button, ButtonGroup } from '@mui/material';


function TipsTypeSelector({ onComponentLoaded }) {
  const loadContent = (filePath) => {
      onComponentLoaded(filePath); // Use the callback to pass the file path
  };

  return (
      <div className="lifeTipsTypeSelector" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
          <div>
              <ButtonGroup variant='contained'>
                  <Button onClick={() => loadContent('/lifetips/quotes.json')}>Quotes</Button>
                  <Button onClick={() => loadContent('/lifetips/tips.json')}>Tips</Button>
              </ButtonGroup>
          </div>
      </div>
  );
}

export default TipsTypeSelector;