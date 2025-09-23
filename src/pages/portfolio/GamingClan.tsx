import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gamepad2, Trophy, Users, Zap, Target, Crown, Star, Sword, Shield, Flame } from "lucide-react";

const GamingClan = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const [activeGame, setActiveGame] = useState("valorant");

  const games = {
    valorant: { rank: "Immortal", wins: 247, kd: "1.8" },
    csgo: { rank: "Global Elite", wins: 523, kd: "2.1" },
    apex: { rank: "Predator", wins: 189, kd: "2.4" },
    lol: { rank: "Challenger", wins: 445, kd: "3.2" }
  };

  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "ESL Pro League",
      description: "2nd Place - $50,000 Prize Pool",
      game: "CS:GO"
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: "VCT Regional",
      description: "Champions - $25,000 Prize Pool",
      game: "Valorant"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "ALGS Championship",
      description: "Top 4 Finish - $15,000 Prize Pool",
      game: "Apex Legends"
    },
    {
      icon: <Sword className="h-8 w-8" />,
      title: "LCS Qualifier",
      description: "Semifinals - $10,000 Prize Pool",
      game: "League of Legends"
    }
  ];

  const teamMembers = [
    {
      name: "ZeroGravity",
      role: "IGL/Entry Fragger",
      game: "Valorant",
      rank: "Radiant",
      avatar: "🔥"
    },
    {
      name: "ShadowStrike",
      role: "AWPer/Sniper",
      game: "CS:GO",
      rank: "Global Elite",
      avatar: "⚡"
    },
    {
      name: "PhantomX",
      role: "Support/Anchor",
      game: "Valorant",
      rank: "Immortal 3",
      avatar: "👑"
    },
    {
      name: "VoidWalker",
      role: "Lurker/Clutch",
      game: "CS:GO",
      rank: "Supreme",
      avatar: "💀"
    },
    {
      name: "CyberNinja",
      role: "Rifler/Support",
      game: "Valorant",
      rank: "Immortal 2",
      avatar: "⚔️"
    },
    {
      name: "DragonSlayer",
      role: "Mid Laner",
      game: "League of Legends",
      rank: "Grandmaster",
      avatar: "🐉"
    }
  ];

  const upcomingMatches = [
    { date: "2025-01-28", time: "20:00", opponent: "Team Liquid", game: "Valorant", tournament: "VCT Challengers" },
    { date: "2025-01-30", time: "18:30", opponent: "FaZe Clan", game: "CS:GO", tournament: "ESL Pro League" },
    { date: "2025-02-02", time: "19:15", opponent: "TSM", game: "Apex Legends", tournament: "ALGS Championship" },
    { date: "2025-02-05", time: "21:00", opponent: "G2 Esports", game: "League of Legends", tournament: "LEC Spring" }
  ];

  return (
    <div style={{ fontFamily: '"Orbitron", sans-serif' }} className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10" />
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} />

        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-red-500 to-purple-500 text-white border-0 px-6 py-3 text-lg">
              <Gamepad2 className="w-5 h-5 mr-2" />
              APEX PREDATORS
            </Badge>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 tracking-wider">
              DOMINATE
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8" style={{ fontFamily: '"Rajdhani", sans-serif' }}>
              THE DIGITAL BATTLEFIELD
            </h2>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: '"Rajdhani", sans-serif' }}>
              Elite gaming clan crushing competition across Valorant, CS:GO, Apex Legends, and League of Legends.
              Join the legends and ascend to greatness.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white px-10 py-5 text-xl font-bold">
                <Crown className="mr-3 h-6 w-6" />
                JOIN THE CLAN
              </Button>
              <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/10 px-10 py-5 text-xl font-bold">
                <Trophy className="mr-3 h-6 w-6" />
                VIEW STATS
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-black/30 border-y border-purple-500/20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-black text-red-400 mb-2">247</h3>
              <p className="text-gray-400 font-medium" style={{ fontFamily: '"Rajdhani", sans-serif' }}>TOTAL WINS</p>
            </div>
            <div>
              <h3 className="text-4xl font-black text-purple-400 mb-2">89%</h3>
              <p className="text-gray-400 font-medium" style={{ fontFamily: '"Rajdhani", sans-serif' }}>WIN RATE</p>
            </div>
            <div>
              <h3 className="text-4xl font-black text-pink-400 mb-2">$150K</h3>
              <p className="text-gray-400 font-medium" style={{ fontFamily: '"Rajdhani", sans-serif' }}>PRIZE MONEY</p>
            </div>
            <div>
              <h3 className="text-4xl font-black text-cyan-400 mb-2">24</h3>
              <p className="text-gray-400 font-medium" style={{ fontFamily: '"Rajdhani", sans-serif' }}>TOURNAMENTS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Games Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-black text-center text-white mb-16 tracking-wider">OUR GAMES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Valorant", rank: "Radiant", icon: "🎯", color: "from-red-500 to-orange-500" },
            { name: "CS:GO", rank: "Global Elite", icon: "🔫", color: "from-blue-500 to-cyan-500" },
            { name: "Apex Legends", rank: "Predator", icon: "⚡", color: "from-orange-500 to-red-500" },
            { name: "League of Legends", rank: "Challenger", icon: "⚔️", color: "from-purple-500 to-pink-500" }
          ].map((game, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className={`text-6xl mb-4 p-4 rounded-full bg-gradient-to-r ${game.color} w-20 h-20 flex items-center justify-center mx-auto`}>
                  {game.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
                <Badge className={`bg-gradient-to-r ${game.color} text-white border-0 px-4 py-1 font-bold`}>
                  {game.rank}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Members */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-black text-center text-white mb-16 tracking-wider">ELITE SQUAD</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-purple-400 font-medium" style={{ fontFamily: '"Rajdhani", sans-serif' }}>{member.role}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400" style={{ fontFamily: '"Rajdhani", sans-serif' }}>{member.game}</span>
                  <Badge className="bg-gradient-to-r from-red-500 to-purple-500 text-white border-0 font-bold">
                    {member.rank}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-black text-center text-white mb-16 tracking-wider">LEGENDARY ACHIEVEMENTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/30 hover:border-yellow-400 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4 text-black">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-yellow-400 text-sm mb-2 font-medium">{achievement.description}</p>
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black border-0 font-bold">
                  {achievement.game}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Upcoming Matches */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-5xl font-black text-center text-white mb-16 tracking-wider">UPCOMING BATTLES</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {upcomingMatches.map((match, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Sword className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">vs {match.opponent}</h3>
                      <p className="text-gray-400" style={{ fontFamily: '"Rajdhani", sans-serif' }}>{match.tournament}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 font-bold">
                      {match.game}
                    </Badge>
                    <div className="text-right">
                      <p className="text-white font-bold" style={{ fontFamily: '"Rajdhani", sans-serif' }}>{match.date}</p>
                      <p className="text-gray-400" style={{ fontFamily: '"Rajdhani", sans-serif' }}>{match.time}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recruitment CTA */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-3xl p-12 border border-purple-500/20 text-center">
          <Flame className="h-20 w-20 text-red-400 mx-auto mb-8" />
          <h2 className="text-5xl font-black bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-8 tracking-wider">
            THINK YOU HAVE WHAT IT TAKES?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto" style={{ fontFamily: '"Rajdhani", sans-serif' }}>
            We're always looking for elite players to join our ranks. Prove your skills and become part of gaming history.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white px-10 py-5 text-xl font-black">
              <Users className="mr-3 h-6 w-6" />
              APPLY NOW
            </Button>
            <Button variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-10 py-5 text-xl font-black">
              <Shield className="mr-3 h-6 w-6" />
              DISCORD
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-gray-400 text-sm" style={{ fontFamily: '"Rajdhani", sans-serif' }}>MINIMUM RANK</p>
              <p className="text-white font-bold">IMMORTAL+</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm" style={{ fontFamily: '"Rajdhani", sans-serif' }}>EXPERIENCE</p>
              <p className="text-white font-bold">2+ YEARS</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm" style={{ fontFamily: '"Rajdhani", sans-serif' }}>COMMITMENT</p>
              <p className="text-white font-bold">20+ HRS/WEEK</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm" style={{ fontFamily: '"Rajdhani", sans-serif' }}>ATTITUDE</p>
              <p className="text-white font-bold">CHAMPION</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingClan;