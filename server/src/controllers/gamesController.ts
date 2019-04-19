import {Request, Response} from 'express';

import pool from '../database';

class GamesController {
  public async list(req: Request, res: Response) {
    const games = await pool.query('SELECT * FROM games');
    res.json(games);
  }

  public async getOne (req: Request, res: Response): Promise<any>{
    const { id } = req.params;
    const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
    if (games.length > 0) {
      console.log(games);
      return res.json(games[0]);
    }
    res.status(404).json({text: "O jogo não existe."});
  }

  public async create (req: Request, res: Response): Promise<void> {
    //console.log(req.body);
    await pool.query('INSERT INTO games set ?', [req.body]);
    res.json({message: 'Game Saved'});
  }

  public async update (req: Request, res: Response): Promise<void>{
    const { id } = req.params;
    await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
    res.json({text: "O jogo foi atualizado."});
  }

  public async delete (req: Request, res: Response): Promise<void>{
    const { id } = req.params;
    await pool.query('DELETE FROM games WHERE id = ?', [id]);
    res.json({text: 'O jogo '+ req.params.id + ' foi excluído.'});
  }
}

export const gamesController = new GamesController();
