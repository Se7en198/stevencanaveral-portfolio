export default async (request, context) => {
  const ua = request.headers.get('user-agent') || '';
  const isSocialBot =
    ua.includes('facebookexternalhit') ||
    ua.includes('Facebot') ||
    ua.includes('Twitterbot') ||
    ua.includes('WhatsApp') ||
    ua.includes('LinkedInBot') ||
    ua.includes('Slackbot');

  if (!isSocialBot) return context.next();

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Steven Cañaveral — AI Creative Director</title>
  <meta property="og:type"         content="website">
  <meta property="og:url"          content="https://stevencanaveral.netlify.app/">
  <meta property="og:title"        content="Steven Cañaveral — AI Creative Director">
  <meta property="og:description"  content="Produzco campañas publicitarias con IA: ads, contenido, moda y experiencias de marca para agencias en Latinoamérica.">
  <meta property="og:image"        content="https://res.cloudinary.com/dnlef79tv/image/upload/f_jpg,q_85,w_1200,h_630,c_fill/og-preview">
  <meta property="og:image:type"   content="image/jpeg">
  <meta property="og:image:width"  content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale"       content="es_CO">
  <meta name="twitter:card"        content="summary_large_image">
  <meta name="twitter:title"       content="Steven Cañaveral — AI Creative Director">
  <meta name="twitter:description" content="Produzco campañas publicitarias con IA: ads, contenido, moda y experiencias de marca para agencias en Latinoamérica.">
  <meta name="twitter:image"       content="https://res.cloudinary.com/dnlef79tv/image/upload/f_jpg,q_85,w_1200,h_630,c_fill/og-preview">
</head>
<body></body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
};

export const config = { path: '/' };
