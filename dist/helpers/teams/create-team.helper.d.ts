import { TeamOverview, EncryptedTeam } from './definitions';
export default function createTeamHelper(overview: TeamOverview, secretKey: string): Promise<EncryptedTeam>;
