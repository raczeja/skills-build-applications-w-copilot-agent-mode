from django.test import TestCase
from .models import User, Team, Activity, Workout, Leaderboard

class ModelTests(TestCase):
    def setUp(self):
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')
        spiderman = User.objects.create(name='Spider-Man', email='spiderman@marvel.com', team=marvel)
        ironman = User.objects.create(name='Iron Man', email='ironman@marvel.com', team=marvel)
        wonderwoman = User.objects.create(name='Wonder Woman', email='wonderwoman@dc.com', team=dc)
        batman = User.objects.create(name='Batman', email='batman@dc.com', team=dc)
        Workout.objects.create(name='Super Strength', description='Strength training', difficulty='Hard')
        Activity.objects.create(user=spiderman, type='Running', duration=30, date='2025-10-24')
        Leaderboard.objects.create(user=spiderman, score=100)

    def test_user_count(self):
        self.assertEqual(User.objects.count(), 4)
    def test_team_count(self):
        self.assertEqual(Team.objects.count(), 2)
    def test_activity_count(self):
        self.assertEqual(Activity.objects.count(), 1)
    def test_workout_count(self):
        self.assertEqual(Workout.objects.count(), 1)
    def test_leaderboard_count(self):
        self.assertEqual(Leaderboard.objects.count(), 1)
