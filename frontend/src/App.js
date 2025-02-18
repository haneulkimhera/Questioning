import './App.css';
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignUp from './pages/create_account';
import Login from './pages/login';
import Main from './pages/main';
import Sample from './pages/sample';
import Board from './pages/board';
import AskQuestion from './pages/ask_question';
import ReplyQuestion from './pages/reply_question';
import ViewQuestion from './pages/view_question';
import Mypage from './pages/mypage';
import { useEffect, useState } from 'react';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create_account" element={<SignUp/>} />
          <Route path="/main" element={<Main />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="/board" element={<Board />} />
          <Route path="/ask_question" element={<AskQuestion/>} />
          <Route path="/reply_question" element={<ReplyQuestion/>} />
          <Route path="/view_question" element={<ViewQuestion/>} />
          <Route path="/mypage" element={<Mypage/>} />
        </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
