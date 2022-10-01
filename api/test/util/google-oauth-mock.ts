import * as express from 'express';

const googleMockApp = express();

const config = {
  redirect_url: '',
  profile: {
    sub: '108442171748001887974',
    email: 'google.mock@example.com',
    email_verified: true,
    name: 'Test User',
    given_name: 'User',
    family_name: 'Test',
    picture: 'https://source.unsplash.com/user/c_v_r/500x500',
    locale: 'en',
  },
};

googleMockApp.get('/', (req, res) => {
  res.send('mock-auth');
});

googleMockApp.get('/mock-auth', (req, res) => {
  res.redirect(config.redirect_url);
});

googleMockApp.post('/mock-token', (req, res) => {
  res.status(200).json({
    access_token: '1/fFAGRNJru1FTz70BzhT3Zg',
    expires_in: 3920,
    token_type: 'Bearer',
    refresh_token: '1/xEoDL4iW3cxlI7yDbSRFYNG01kVKM2C-259HOF2aQbI',
  });
});

googleMockApp.get('/mock-user', (req, res) => {
  res.status(200).json(config.profile);
});

const startServer = (port: number) => new Promise((res) => {
  // That works lol :]
  let x: any;

  x = googleMockApp.listen(port, () => {
    res(x);
  });
});

export const start = async (port: number) => {
  const server = await startServer(port);

  return { server, config };
};
