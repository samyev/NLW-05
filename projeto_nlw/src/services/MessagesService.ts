import { getCustomRepository, Repository } from "typeorm";

import { Messages } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface MessagesServiceProps {
  admin_id?: string;
  user_id: string;
  text: string;
}

class MessagesService {
  private messagesRepository: Repository<Messages>;

  constructor() {
    this.messagesRepository = getCustomRepository(MessagesRepository);
  }

  async create({ admin_id, user_id, text }: MessagesServiceProps) {
    const message = this.messagesRepository.create({
      admin_id,
      user_id,
      text,
    });

    await this.messagesRepository.save(message);

    return message;
  }

  async listByUser(user_id: string) {
    const list = await this.messagesRepository.find({
      where: { user_id },
      relations: ["user"],
    });

    return list;
  }
}

export { MessagesService };