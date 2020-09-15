import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import News from '../pages/News';
import EntireNews from '../pages/EntireNews';
import Events from '../pages/Events';
import Courses from '../pages/Courses';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/noticias" exact component={News} />
        <Route path="/noticia" exact component={EntireNews} />
        <Route path="/eventos" exact component={Events} />
        <Route path="/cursos" exact component={Courses} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
