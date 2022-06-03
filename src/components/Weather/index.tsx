import React, { useState } from 'react';
import axios from 'axios';

import { Container, SearchWrapper, SearchInput, SearchIcon, Content, Error, City, Temp, Temp2, Sense, Min, Max} from './styles';

interface Dados{
  name? : string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    
  },
}

const Weather: React.FC = () => {
    const DEFAULT_DATA = {
      name: '',
      main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0
      }
    }
    
    const [data, setData] = useState<Dados>(DEFAULT_DATA);
    const [location, setLocation,] = useState('');
    const [error, setError] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c31525bc7b1edcaea7ca46ca41e141e9`;

    const searchLocation = (event: { key: string; }) => {
    
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
              setData(response.data);
              setError('');
            })

            .catch(err => {
              setError('Local Invalido, insira outro local');
            })

            setLocation('');
        }
    }


  return (
    <Container>
      <SearchWrapper>
        <SearchIcon />
        
        <SearchInput
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Como está o tempo em... '
          type='text'
        />
      </SearchWrapper>
      
      <Content>
        <Error>{error}</Error>
        <City>{data?.name}</City>
        <Temp>
          <p>{data.main ? data.main.temp.toFixed() : null}°C</p>
        </Temp>
        <Temp2>
          <Sense>
            <p>{data.main ? data.main.feels_like.toFixed() : null}°C</p>
            <span>Sens. Térmica</span>
          </Sense>
          <Min>
            <p>{data.main ? data.main.temp_min.toFixed() : null}°C</p>
            <span>Mínima</span>
          </Min>
          <Max>
            <p>{data.main ? data.main.temp_max.toFixed() : null}°C</p>
            <span>Máxima</span>
          </Max>
        </Temp2>  
     
      
      </Content>
    </Container>
  );
}

export default Weather;