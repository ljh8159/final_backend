import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function SignupPage() {
  const [form, setForm] = useState({ user_id: '', password: '' });
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      alert(data.result === 'success' ? '회원가입 성공!' : (data.error || '회원가입 실패'));
      if (data.result === 'success') {
        history.push('/login');
      }
    } catch (err) {
      alert('회원가입 실패');
    }
  };

  return (
    <div style={{ maxWidth: 350, margin: '0 auto', padding: 24 }}>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="user_id"
          type="text"
          placeholder="아이디"
          value={form.user_id}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: 12, padding: 8 }}
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: 12, padding: 8 }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: 10,
            background: '#ffd600',
            border: 'none',
            borderRadius: 8,
          }}
        >
          회원가입
        </button>
      </form>
    </div>
  );
}

export default SignupPage;