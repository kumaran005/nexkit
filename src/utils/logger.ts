import kleur from 'kleur';
import appConfig from '@configs/app.config';

const tagColor = '#e10098';

export function printBanner(port: number) {
  const tag = kleur.magenta().bold('[' + appConfig.NAME + ']');
  const url = kleur.cyan().underline(`http://localhost:${port}`);
  const msg = kleur.green(`⚡ Server ready at ${url}`);

  console.log(`${tag} ${msg}`);
}
